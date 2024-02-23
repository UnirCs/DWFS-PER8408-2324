package com.unir.forum.publisher.controller;

import com.unir.forum.publisher.model.DirectMessage;
import com.unir.forum.publisher.model.ForumMessage;
import com.unir.forum.publisher.service.PublisherService;
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
public class PublisherController {

    private final PublisherService publisherService;

    @Value("${forum.userId}")
    private String userId;

    /**
     * Envía un mensaje a un topic. Un topic es un canal de comunicación que puede tener varios suscriptores.
     *
     * @param topic - nombre del topic.
     * @param message - mensaje a enviar.
     * @return - respuesta de la petición.
     */
    @PostMapping(value="/api/topics/{topic}")
    public ResponseEntity<?> broadcastMessage(@PathVariable String topic, @RequestBody ForumMessage message){
        publisherService.publishToTopic(topic, String.format("%s: %s", userId, message.getMessage()));
        return ResponseEntity.ok().build();
    }


    /**
     * Envía un mensaje a una cola. Una cola es un canal de comunicación que tiene un único suscriptor.
     *
     * @param userId - id del usuario que recibirá el mensaje.
     * @param message - mensaje a enviar.
     * @return - respuesta de la petición.
     */
    @PostMapping(value="/api/direct-messages/{userId}")
    public ResponseEntity<?> directMessage(@PathVariable String userId, @RequestBody DirectMessage message){
        publisherService.publishToQueue(userId, message.getFormattedMessage());
        return ResponseEntity.ok().build();
    }
}
