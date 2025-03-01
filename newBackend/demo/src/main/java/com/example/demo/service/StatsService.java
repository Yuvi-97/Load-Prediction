package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Stats;
import com.example.demo.repository.StatsRepository;

@Service
public class StatsService {

    @Autowired
    private StatsRepository statsRepository;

    // ✅ Get all stats
    public List<Stats> getAllStats() {
        return statsRepository.findAll();
    }

    // ✅ Get stats by ID
    public Optional<Stats> getStatsById(Long id) {
        return statsRepository.findById(id);
    }

    // ✅ Save new stats
    public Stats saveStats(Stats stats) {
        return statsRepository.save(stats);
    }

    // ✅ Update stats
    public Stats updateStats(Long id, Stats updatedStats) {
        return statsRepository.findById(id).map(stats -> {
            stats.setNum1(updatedStats.getNum1());
            stats.setNum2(updatedStats.getNum2());
            stats.setNum3(updatedStats.getNum3());
            stats.setNum4(updatedStats.getNum4());
            stats.setNum5(updatedStats.getNum5());
            return statsRepository.save(stats);
        }).orElseThrow(() -> new RuntimeException("Stats not found"));
    }

    // ✅ Delete stats
    public void deleteStats(Long id) {
        statsRepository.deleteById(id);
    }
}
