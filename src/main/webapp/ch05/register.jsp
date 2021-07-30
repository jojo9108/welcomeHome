<%@page import="co.yedam.UserDAO"%>
<%@page import="co.yedam.UserVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>register.jsp</title>
</head>
<body>
	<%
	
	request.setCharacterEncoding("UTF-8");
	
	String uid = request.getParameter("user_id");
	String upw = request.getParameter("user_pw");
	String unm = request.getParameter("user_name");
	String ugn = request.getParameter("user_gen");
	String uhb = request.getParameter("user_hobby");
	String ubt = request.getParameter("user_birth");

	UserVO vo = new UserVO();
	vo.setUserId(uid);
	vo.setUserPw(upw);
	vo.setUserName(unm);
	vo.setUserGen(ugn);
	vo.setUserHobby(uhb);
	vo.setUserBirth(ubt);

	UserDAO dao = new UserDAO();
	dao.insertUser(vo);
	
	out.print("<script>alert('입력성공')</script>");
	out.print("<h1>입력완료</h1>");
	%>
</body>
</html>