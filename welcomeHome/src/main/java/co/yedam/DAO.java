package co.yedam;

import java.sql.Connection;
import java.sql.DriverManager;


public class DAO {
	protected Connection conn;
	
	public void connect() {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			String url = "jdbc:oracle:thin:@localhost:1521:xe";
			conn = DriverManager.getConnection(url, "bbuggu", "1234");
			System.out.println("connected!");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
