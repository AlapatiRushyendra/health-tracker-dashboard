
package com.healthtracker.controller;

import com.healthtracker.model.HealthRecord;
import com.healthtracker.repository.HealthRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/records")
@CrossOrigin(origins = "*")
public class HealthRecordController {

    @Autowired
    private HealthRecordRepository repository;

    @PostMapping
    public HealthRecord addRecord(@RequestBody HealthRecord record) {
        return repository.save(record);
    }

    @GetMapping("/{username}")
    public List<HealthRecord> getRecords(@PathVariable String username) {
        return repository.findByUsername(username);
    }
}
