package com.wpc.common.quartz;

public class Test {

    public static void test() {
        for (int i = 0; i < 10; i++) {
            System.out.println("正在执行任务："+i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

}
