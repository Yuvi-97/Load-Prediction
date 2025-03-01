package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Stats;
import com.example.demo.service.StatsService;

@RestController
@RequestMapping("/api/stats")
@CrossOrigin(origins = "http://localhost:3000") // Enable CORS for React
public class StatsController {

    @Autowired
    private StatsService statsService;

    // ✅ Get all stats
    @GetMapping
    public List<Stats> getAllStats() {
        return statsService.getAllStats();
    }

    // ✅ Get stats by ID
    @GetMapping("/{id}")
    public Optional<Stats> getStatsById(@PathVariable Long id) {
        return statsService.getStatsById(id);
    }

    // ✅ Save new stats
    @PostMapping
    public Stats createStats(@RequestBody Stats stats) {
        return statsService.saveStats(stats);
    }

    // ✅ Update stats
    @PutMapping("/{id}")
    public Stats updateStats(@PathVariable Long id, @RequestBody Stats stats) {
        return statsService.updateStats(id, stats);
    }

    // ✅ Delete stats
    @DeleteMapping("/{id}")
    public void deleteStats(@PathVariable Long id) {
        statsService.deleteStats(id);
    }
}
