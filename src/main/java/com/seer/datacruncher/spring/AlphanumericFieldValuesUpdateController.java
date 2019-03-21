/*
 * Copyright (c) 2019  Altimari Mario
 * All rights reserved
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */package com.seer.datacruncher.spring;

import com.seer.datacruncher.jpa.dao.DaoSet;
import com.seer.datacruncher.jpa.entity.AlphanumericFieldValuesEntity;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

public class AlphanumericFieldValuesUpdateController implements Controller, DaoSet {

	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String json = request.getReader().readLine();// request.getParameter("results");
		ObjectMapper mapper = new ObjectMapper();
		AlphanumericFieldValuesEntity alphanumericFieldValuesEntity = new AlphanumericFieldValuesEntity();
		alphanumericFieldValuesEntity = mapper.readValue(json, AlphanumericFieldValuesEntity.class);
		schemasXSDDao.destroy(alphanumericFieldValuesEntity.getIdSchema());
		ServletOutputStream out = null;
		response.setContentType("application/json");
		out = response.getOutputStream();
		out.write(mapper.writeValueAsBytes(alphaFieldDao.update(alphanumericFieldValuesEntity)));
		out.flush();
		out.close();
		return null;
	}
}