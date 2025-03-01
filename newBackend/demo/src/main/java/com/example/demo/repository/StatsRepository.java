package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Stats;

public interface StatsRepository extends JpaRepository<Stats, Long> {
}
