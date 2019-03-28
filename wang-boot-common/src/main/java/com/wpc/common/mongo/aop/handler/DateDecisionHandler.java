package com.wpc.common.mongo.aop.handler;

import com.wpc.common.mongo.aop.DecisionInfo;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;
import java.util.Objects;

/**
 * 日期分库策略，根据日期获取指定的库
 * Created by 王鹏程 on 2018/11/19 0019.
 */
@Component
public class DateDecisionHandler implements DecisionHandler<DecisionInfo> {

    public static final String DATE_ARRANGED = "DATE";

    private final Date DATE_2018;
    private final Date DATE_2017;
    private final Date DATE_2016;

    public DateDecisionHandler() {
        Calendar calendar = Calendar.getInstance();
        calendar.set(2016, 00, 00, 00, 00, 00);
        DATE_2016 = calendar.getTime();
        calendar.add(Calendar.YEAR, 1);
        DATE_2017 = calendar.getTime();
        calendar.add(Calendar.YEAR, 1);
        DATE_2018 = calendar.getTime();
    }

    @Override
    public boolean support(DecisionInfo obj) {
        return Objects.equals(DATE_ARRANGED, obj.getStrategy());
    }

    @Override
    public String handle(DecisionInfo decisionInfo) {
        if (decisionInfo.getSpecifyValue() instanceof Date) {
            Date date = (Date) decisionInfo.getSpecifyValue();
            if (date.after(DATE_2018)) {
                return "mongoMain";
            } else if (date.after(DATE_2017)) {
                return "mongo2017";
            } else if (date.after(DATE_2016)) {
                return "mongo2016";
            }
        }
        return null;
    }
}
