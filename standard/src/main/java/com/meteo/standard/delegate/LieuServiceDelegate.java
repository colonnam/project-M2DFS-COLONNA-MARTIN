package com.meteo.standard.delegate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Date;

@Service
public class LieuServiceDelegate {
    @Autowired
    RestTemplate restTemplate;
    String KEY="fnbRYAAGhzNe9GMpwHpKrWpxQdMGkURi";

    @HystrixCommand(fallbackMethod = "callLieuServiceAndGetData_Fallback")
    public String callLieuServiceAndGetData(String location) {
        System.out.println("Getting lieu details for " + location);
        String response = restTemplate
                .exchange("http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+this.KEY+"&q={location}"
                        , HttpMethod.GET
                        , null
                        , new ParameterizedTypeReference<String>() {
                        }, location).getBody();

        System.out.println("Response Received as " + response + " -  " + new Date());

        System.out.println( "NORMAL FLOW !!! - Location -  " + location + " :::  Location weather " + response + " -  " + new Date());

        return response;
    }

    @SuppressWarnings("unused")
    private String callLieuServiceAndGetData_Fallback(String location) {
        System.out.println("lieu Service is down!!! fallback route enabled...");
        return "CIRCUIT BREAKER ENABLED!!!No Response From Student Service at this moment. Service will be back shortly - " + new Date();
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}