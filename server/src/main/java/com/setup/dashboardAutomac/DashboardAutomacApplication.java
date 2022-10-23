package com.setup.dashboardAutomac;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class DashboardAutomacApplication {
	public static void main(String[] args) {
		RenderGui.RenderAndShowGui();
		SpringApplication.run(DashboardAutomacApplication.class, args);
	}
}
