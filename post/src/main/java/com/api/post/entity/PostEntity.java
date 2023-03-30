package com.api.post.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "posts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostEntity {
    @Id
    private String id;
    private String name;
    private String title;
    private String content;
    private LocalDateTime date;
    private List<CommentEntity> comments;
}
