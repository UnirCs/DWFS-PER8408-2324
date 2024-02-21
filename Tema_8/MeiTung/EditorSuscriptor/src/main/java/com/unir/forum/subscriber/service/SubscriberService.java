package com.unir.forum.subscriber.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class SubscriberService {

    private final JmsTemplate topicJmsTemplate;

    // Escuchar mensajes de tópico tema1
    @JmsListener(destination = "tema1", containerFactory = "jmsFactoryTopic")
    public void listenTopic1(String message) {
        log.info("Mensaje publicado en tema1: " + message);
    }

    // Escuchar mensajes de tópico tema2
    @JmsListener(destination = "tema2", containerFactory = "jmsFactoryTopic")
    public void listenTopic2(String message) {
        log.info("Mensaje publicado en tema2: " + message);
    }

    // Escuchar mensajes de tópico tema3
    @JmsListener(destination = "tema3", containerFactory = "jmsFactoryTopic")
    public void listenTopic3(String message) {
        log.info("Mensaje publicado en tema3: " + message);
    }

    // Escuchar mensajes de tópico tema4
    @JmsListener(destination = "tema4", containerFactory = "jmsFactoryTopic")
    public void listenTopic4(String message) {
        log.info("Mensaje publicado en tema4: " + message);
    }

    // Escuchar mensajes de la cola de mensajes directos
    @JmsListener(destination = "${forum.userId}")
    public void listenDirectMessages(String message) {
        log.info("Se ha recibido un mensaje privado: " + message);
    }

    // Enviar mensaje a un tópico
    public void publishToTopic(String topic, String message) {
        topicJmsTemplate.convertAndSend(topic, message);
    }
}
