package com.unir.forum.subscriber.controller;

import com.unir.forum.subscriber.service.SubscriberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
public class SubscriberController {

    private final SubscriberService subscriberService;

    @Value("${forum.userId}") private String userId;
    @PostMapping(value="/api/topics/{topic}")
    public ResponseEntity<?> broadcastMessage(
            @PathVariable String topic,
            @RequestBody com.unir.forum.publisher.model.ForumMessage message
    ){
        subscriberService.publishToTopic(topic, String.format("%s: %s", userId, message.getMessage()));
        return ResponseEntity.ok().build();
    }
}
