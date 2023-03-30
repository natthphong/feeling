package com.api.post.controller;

import com.api.post.entity.CommentEntity;
import com.api.post.service.CommentService;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comment")
public class CommentController {
    final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @DeleteMapping("")
    public String helloworld(){
        return "HELLO";
    }

    @PostMapping("/create/{postId}")
    public ResponseEntity<CommentEntity> create(@PathVariable ObjectId postId , @RequestBody CommentEntity comment){
        return new ResponseEntity<CommentEntity>(commentService.create(postId,comment) , HttpStatus.OK);
    }

    @DeleteMapping("/delete/{postId}/{commentId}")
    public ResponseEntity<String> create(@PathVariable ObjectId postId , @PathVariable ObjectId commentId){
        return new ResponseEntity<String>(commentService.delete(postId,commentId) , HttpStatus.OK);
    }

}
