package com.unir.forum.subscriber.controller;

import com.unir.forum.subscriber.model.ForumMessage;
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

    private final SubscriberService service;

    @Value("${forum.userId}")
    private String userId;

    /**
     * Endpoint para publicar mensajes en un tópico.
     * @param topic - El tópico al cual enviar el mensaje.
     * @param message - El mensaje a enviar.
     * @return ResponseEntity - Respuesta HTTP.
     */
    @PostMapping("/api/topics/{topic}")
    public ResponseEntity<?> broadcastMessage(@PathVariable String topic, @RequestBody ForumMessage message) {
        service.publishToTopic(topic, String.format("%s: %s", userId, message.getMessage()));
        return ResponseEntity.ok("Mensaje enviado al tópico " + topic);
    }
}
