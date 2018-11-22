/**
 * Copyright 2018-2020 stylefeng & fengshuonan (https://gitee.com/stylefeng)
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.wpc.system.warpper;

import com.github.pagehelper.PageInfo;
import com.wpc.base.warpper.BaseWrapper;
import com.wpc.system.factory.ConstantFactory;

import java.util.List;
import java.util.Map;

/**
 * 部门列表的包装
 *
 * @author fengshuonan
 * @date 2017年4月25日 18:10:31
 */
public class DeptWarpper extends BaseWrapper {

    public DeptWarpper(Map<String, Object> single) {
        super(single);
    }

    public DeptWarpper(List<Map<String, Object>> multi) {
        super(multi);
    }

    public DeptWarpper(PageInfo<Map<String, Object>> page) {
        super(page);
    }

    @Override
    protected void wrapTheMap(Map<String, Object> map) {
        Long pid = (Long) map.get("parent_id");
        map.put("parentId", pid);
        if (pid.equals(0L)) {
            map.put("pName", "--");
        } else {
            map.put("pName", ConstantFactory.me().getDeptName(pid));
        }
    }
}
