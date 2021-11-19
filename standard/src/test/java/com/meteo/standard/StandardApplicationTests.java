package com.meteo.standard;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class StandardApplicationTests {

	@Test
	void contextLoads() {
	}
	@Test
	void testGetHelloWorld() {

		assertEquals(1,1);
	}

}
