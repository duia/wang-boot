<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/common/include/taglib.jsp"%>
<div data-options="region:'west',split:true,title:'<i class=\'fa fa-desktop fa-lg\'></i> 菜单'" style="width:200px;">
    <div class="zTreeDemoBackground left">
        <ul id="treeDemo" class="ztree"></ul>
    </div>
    <%--<div class="easyui-accordion" style="">
        <div title="TreeMenu" data-options="iconCls:'icon-search'" style="padding:10px;">
            <embed width="100%" height="100%" type="application/x-shockwave-flash" src="http://files.cnblogs.com/files/yjzhu/time.swf" name="plugin">
        </div>
    </div>--%>
    <%--<ul id="menu" class="nav" style="*white-space:nowrap;float:none;">
        <c:set var="firstMenu" value="true"/>
        <c:forEach items="${fns:getMenuList()}" var="menu" varStatus="idxStatus">
            &lt;%&ndash;<c:if test="${menu.parent.id eq '1'&&menu.isActive eq '1'}">&ndash;%&gt;
                <li class="menu ${not empty firstMenu && firstMenu ? ' active' : ''}">
                    <c:if test="${empty menu.href}">
                        <a class="menu" href="javascript:" data-href="${ctx}/sys/menu/tree?parentId=${menu.id}" data-id="${menu.id}"><span>${menu.menuName}</span></a>
                    </c:if>
                    <c:if test="${not empty menu.href}">
                        <a class="menu" href="${fn:indexOf(menu.href, '://') eq -1 ? ctx : ''}${menu.href}" data-id="${menu.id}" target="mainFrame"><span>${menu.menuName}</span></a>
                    </c:if>
                </li>
                <c:if test="${firstMenu}">
                    <c:set var="firstMenuId" value="${menu.id}"/>
                </c:if>
                <c:set var="firstMenu" value="false"/>
            &lt;%&ndash;</c:if>&ndash;%&gt;
        </c:forEach>
    </ul>--%>
</div>