package com.meteo.standard;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;

@SpringBootApplication
@EnableCircuitBreaker
@EnableHystrixDashboard

public class StandardApplication {
	@HystrixCommand(fallbackMethod ="myFallbackMethod")
	public static void main(String[] args) {
		SpringApplication.run(StandardApplication.class, args);
	}

}
