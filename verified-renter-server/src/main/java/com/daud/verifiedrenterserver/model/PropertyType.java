package com.daud.verifiedrenterserver.model;

import com.daud.verifiedrenterserver.model.audit.DateAudit;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PropertyType extends DateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    public PropertyType() {
    }

    public PropertyType(String name) {
        this.name = name;
    }
}
