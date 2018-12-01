package com.wpc.entity;

import com.wpc.mongo.bean.Entity;
import com.wpc.mongo.dao.shardcollection.ShardingKey;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "title")
public class Title extends Entity {

    @Indexed
    @ShardingKey(shardingColumn = "userId", value = "userId", shardingCount = 128)
    private Long userId;
    private String answer;
    @Indexed
    private String title;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    @Override
    public String toString() {
        return "Title{" +
                "userId=" + userId +
                ", title='" + title + '\'' +
                ", answer='" + answer + '\'' +
                ", createTime=" + createTime +
                '}';
    }
}
