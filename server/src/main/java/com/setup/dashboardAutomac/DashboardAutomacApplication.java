package com.setup.dashboardAutomac;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.setup.dashboardAutomac.config.*;

@SpringBootApplication
public class DashboardAutomacApplication {
	public static void main(String[] args) throws Exception {
		RenderGui.RenderAndShowGui();
		SwaggerConfig sc = new SwaggerConfig();
		sc.api();
		SpringApplication.run(DashboardAutomacApplication.class, args);
	}
}
