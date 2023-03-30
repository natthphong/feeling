package com.api.post.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "comments")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentEntity {
    @Id
    private String id;

    private String name;

    private String content;
    private LocalDateTime date;

    public CommentEntity(String name, String content, LocalDateTime date) {
        this.name = name;
        this.content = content;
        this.date = date;
    }
}
