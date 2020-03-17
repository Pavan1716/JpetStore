package com.cts.RunnerFile;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(
			features = "src/main/resources/Features/BuyingAnimals.feature",
			glue = "com/cts/StepDefinitions",
			monochrome = true,
			dryRun=false,
			plugin = {"pretty","html:Remove-output"}
)

public class BuyingRunner {

}
