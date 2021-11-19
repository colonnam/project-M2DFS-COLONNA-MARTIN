package com.meteo.standard.controller;

import com.meteo.standard.delegate.LieuServiceDelegate;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.spring.web.json.Json;

@RestController
@Api(value = "lieu")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LieuServiceController {

    @Autowired
    LieuServiceDelegate lieuServiceDelegate;

    @ApiOperation(value = "lieux recherché ", response = Json.class, tags = "getLieu")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Suceess|OK"),
            @ApiResponse(code = 400, message = "Request had bad syntax or the parameters supplied were invalid"),
            @ApiResponse(code = 401, message = "Unauthorized. API authorization failed"),
            @ApiResponse(code = 403, message = "Unauthorized. You do not have permission to access this endpoint"),
            @ApiResponse(code = 404, message = "Server has not found a route matching the given URI"),
            @ApiResponse(code = 500, message = "Server encountered an unexpected condition which prevented it from fulfilling the request"),
    })

    @RequestMapping(value = "/getlieu/{location}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public String getLieu(@PathVariable String location) {
        return lieuServiceDelegate.callLieuServiceAndGetData(location);
    }

}