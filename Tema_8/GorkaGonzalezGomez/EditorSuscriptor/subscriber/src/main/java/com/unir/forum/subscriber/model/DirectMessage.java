package com.unir.forum.subscriber.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DirectMessage implements Serializable {

    private String message;

    public String getFormattedMessage() {
        return String.format("Tu profesor te ha enviado un mensaje: %s", message);
    }
}