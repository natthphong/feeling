package com.api.post.controller;


import com.api.post.entity.PostEntity;
import com.api.post.service.PostService;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/post")
public class PostController {
    private final PostService postservice;
    public PostController(PostService postservice) {
        this.postservice = postservice;
    }
    @GetMapping("")
    public String hello(){
        return  "hello";
    }
    @Update("/test")
    public String test(){
        return  "test";
    }
    @GetMapping("/view")
    public ResponseEntity<List<PostEntity>> viewAll(){

        return  new ResponseEntity<List<PostEntity>>(postservice.viewAll() , HttpStatus.OK);
    }

    @GetMapping("/view/{id}")
    public ResponseEntity<Optional<PostEntity>> viewById(@PathVariable ObjectId id){
        return  new ResponseEntity<Optional<PostEntity>>(postservice.viewById(id) , HttpStatus.OK);
    }

    @PostMapping("/create")
    public  ResponseEntity<PostEntity> create(@RequestBody PostEntity body){
                    return new ResponseEntity<PostEntity>(postservice.create(body) , HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public  ResponseEntity<String> delete(@PathVariable ObjectId id){
         return new ResponseEntity<String>(postservice.delete(id) , HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public  ResponseEntity<PostEntity> update(@PathVariable String id , @RequestBody PostEntity body){
        return new ResponseEntity<PostEntity>(postservice.update(id , body), HttpStatus.OK);
    }


}
