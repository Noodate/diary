package com.example.applyforhouse;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.StringRedisTemplate;

@SpringBootTest
class ApplyforhouseApplicationTests {

    @Autowired
    private StringRedisTemplate stringRedisTemplate;
    @Test
    public void contextLoads() {
        String foo = stringRedisTemplate.opsForValue().get("foo");
        int i=stringRedisTemplate.opsForValue().append("xixi","haha");
        System.out.println(i);
        if(i==1){
            System.out.println("xixi:"+stringRedisTemplate.opsForValue().get("xixi"));
        }
        System.out.println("foo:" + foo);

    }

}
