package com.api.post.service;

import com.api.post.entity.CommentEntity;
import com.api.post.entity.PostEntity;
import com.api.post.repository.CommentRepository;
import com.mongodb.client.result.UpdateResult;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CommentService {

    private final CommentRepository repository;
    private final MongoTemplate mongoTemplate;

    public CommentService(CommentRepository repository, MongoTemplate mongoTemplate) {
        this.repository = repository;
        this.mongoTemplate = mongoTemplate;
    }

    public CommentEntity create(ObjectId postId, CommentEntity comment) {
        CommentEntity res = repository.insert(new CommentEntity(comment.getName(), comment.getContent(), LocalDateTime.now()));
        mongoTemplate.update(PostEntity.class)
                .matching(Criteria.where("_id").is(postId))
                .apply(new Update().push("comments").value(res))
                .first();
        return res;
    }

    public String delete(ObjectId postId, ObjectId commentId) {
        UpdateResult updateResult = mongoTemplate.updateMulti(new Query(Criteria.where("_id").is(postId)), new Update().pull("comments", new Query(Criteria.where("id").is(commentId))), PostEntity.class);
        repository.deleteById(commentId);
        return "Deleted";
    }
}
