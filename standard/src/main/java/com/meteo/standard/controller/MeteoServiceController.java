package com.meteo.standard.controller;

import com.meteo.standard.delegate.MeteoServiceDelegate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MeteoServiceController {

    @Autowired
    MeteoServiceDelegate meteoServiceDelegate;

    @RequestMapping(value = "/getMeteoDetails/{schoolname}", method = RequestMethod.GET)
    public String getMeteo(@PathVariable String schoolname) {
        System.out.println("Going to call student service to get data!");
        return meteoServiceDelegate.callMeteoServiceAndGetData(schoolname);
    }

}
