package com.unir.forum.publisher.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class PublisherService {

    private final JmsTemplate topicJmsTemplate;
    private final JmsTemplate queueJmsTemplate;

    /**
     * Publica un mensaje en un topic.
     * @param topic - nombre del topic.
     * @param message - mensaje a enviar.
     */
    public void publishToTopic(String topic, String message){
        topicJmsTemplate.convertAndSend(topic, message);
    }

    /**
     * Publica un mensaje en una cola.
     * @param queue - nombre de la cola.
     * @param message - mensaje a enviar.
     */
    public void publishToQueue(String queue, String message){
        queueJmsTemplate.convertAndSend(queue, message);
    }


    /**
     * Escucha los mensajes que llegan a una cola.
     * @param message - mensaje recibido.
     */
    @JmsListener( destination = "${forum.userId}")
    public void listenDirectMessage(String message) {
        log.info("Se ha recibido un mensaje privado: " + message);
    }

}