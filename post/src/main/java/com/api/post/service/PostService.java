package com.api.post.service;

import com.api.post.entity.PostEntity;
import com.api.post.repository.PostRepository;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class PostService {
    final PostRepository postRepository;
    private final MongoTemplate mongoTemplate;
    public PostService(PostRepository postRepository, MongoTemplate mongoTemplate) {
        this.postRepository = postRepository;
        this.mongoTemplate = mongoTemplate;
    }
    public List<PostEntity> viewAll(){
           return postRepository.findAll();
    }

    public Optional<PostEntity>viewById(ObjectId id){
        return postRepository.findById(id);
    }
    public PostEntity create(PostEntity body){
        LocalDateTime date = LocalDateTime.now();
        body.setDate(date);
        postRepository.insert(body);
        return  body;
    }

    public String delete(ObjectId id){
        postRepository.deleteById(id);
        return "Deleted";
    }

    public  PostEntity update(String id , PostEntity body){
        Optional<PostEntity> res =  postRepository.findById(new ObjectId(id));
        body.setId(id);
        body.setDate(res.get().getDate());
        body.setComments(res.get().getComments());
        postRepository.save(body);
        return  body;
    }


}
