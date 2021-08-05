package co.yedam.board;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@WebServlet("/GetBoardServlet")
public class GetBoardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public GetBoardServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");
		// { "data": [[1번째], [2번째], [3번째]...[마지막]] }
		List<HashMap<String, Object>> list = CommentDAO.getInstance().selectAll();
		Gson gson = new GsonBuilder().create();
		//response.getWriter().print(gson.toJson(list));

		JsonArray outAry = new JsonArray();
		for (int i = 0; i < list.size(); i++) { // { "data": [[1번째], [2번째], [3번째]...[마지막]] }
			HashMap<String, Object> map = list.get(i);

			JsonArray inAry = new JsonArray();
			inAry.add((String) map.get("id"));
			inAry.add((String) map.get("name"));
			inAry.add((String) map.get("content"));
			
			outAry.add(inAry);
		}
		JsonObject obj = new JsonObject();
		obj.add("data", outAry);// { "data": [[1번째], [2번째], [3번째]...[마지막]] }
		response.getWriter().print(gson.toJson(obj));
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
