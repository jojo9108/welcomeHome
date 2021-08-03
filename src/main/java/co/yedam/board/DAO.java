package co.yedam.board;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DAO {
	protected Connection conn;
	protected PreparedStatement psmt; // sql명령을 보내고 실행하기 위한 객체
	protected ResultSet rs; // select 결과를 받을 수 있는 객
	protected Statement stmt;

	public void connect() {
		try {
			Class.forName("org.sqlite.JDBC");
			String url = "D:\\sqllite\\db\\chinook.db";
			conn = DriverManager.getConnection("jdbc:sqlite:" + url);
			System.out.println("connected!");
		} catch (Exception e) {
			e.printStackTrace();
				
		}
	}

	public void disconnect() {
		if (conn != null)
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
	}
}
