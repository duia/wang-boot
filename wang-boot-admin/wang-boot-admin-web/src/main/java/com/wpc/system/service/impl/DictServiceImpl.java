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
package com.wpc.system.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.system.dao.DictMapper;
import com.wpc.system.factory.MutiStrFactory;
import com.wpc.system.model.Dict;
import com.wpc.system.service.IDictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import static com.wpc.system.factory.MutiStrFactory.*;

import java.util.List;
import java.util.Map;

/**
 * 字典服务
 *
 * @author 王鹏程
 * @Date 2018/10/15 下午11:39
 */
@Service
public class DictServiceImpl extends BaseServiceImpl<Dict> implements IDictService {

    @Autowired
    private DictMapper dictMapper;

    @Override
    @Transactional
    public void addDict(String dictCode, String dictName, String dictTips, String dictValues) {
        //判断有没有该字典
        Example example = new Example(Dict.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("pid", 0)
                .andEqualTo("code", dictCode);
        List<Dict> dicts = dictMapper.selectByExample(example);
        if (dicts != null && dicts.size() > 0) {
            throw new RuntimeException("字典编码已存在");
        }

        //解析dictValues
        List<Map<String, String>> items = parseKeyValue(dictValues);

        //添加字典
        Dict dict = new Dict();
        dict.setName(dictName);
        dict.setCode(dictCode);
        dict.setTips(dictTips);
        dict.setNum(0);
        dict.setPid(0L);
        this.dictMapper.insert(dict);

        //添加字典条目
        for (Map<String, String> item : items) {
            String code = item.get(MUTI_STR_CODE);
            String name = item.get(MUTI_STR_NAME);
            String num = item.get(MUTI_STR_NUM);
            Dict itemDict = new Dict();
            itemDict.setPid(dict.getId());
            itemDict.setCode(code);
            itemDict.setName(name);

            try {
                itemDict.setNum(Integer.valueOf(num));
            } catch (NumberFormatException e) {
            }
            this.dictMapper.insert(itemDict);
        }
    }

    @Override
    @Transactional
    public void editDict(Integer dictId, String dictCode, String dictName, String dictTips, String dicts) {
        //删除之前的字典
        this.delteDict(dictId);

        //重新添加新的字典
        this.addDict(dictCode, dictName, dictTips, dicts);
    }

    @Override
    @Transactional
    public void delteDict(Integer dictId) {
        //删除这个字典的子词典
        Example example = new Example(Dict.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("pid", dictId);
        dictMapper.deleteByExample(example);
//
//        //删除这个词典
        dictMapper.deleteByPrimaryKey(dictId);
    }

    @Override
    public List<Dict> selectByCode(String code) {
        return this.dictMapper.selectByCode(code);
    }

    @Override
    public List<Dict> selectByParentCode(String code) {
        return this.dictMapper.selectByParentCode(code);
    }

    @Override
    public List<Dict> selectByParentId(Long pid) {
        Example example = new Example(Dict.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("pid", pid);
        List<Dict> dicts = dictMapper.selectByExample(example);
        return dicts;
    }

    @Override
    public List<Map<String, Object>> list(String conditiion) {
        return this.dictMapper.list(conditiion);
    }
}
