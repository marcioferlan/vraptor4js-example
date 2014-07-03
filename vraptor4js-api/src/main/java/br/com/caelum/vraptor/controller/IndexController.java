package br.com.caelum.vraptor.controller;

import javax.inject.Inject;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;

@Controller
public class IndexController {

	@Inject
	private Result result;

	@Path("/")
	public void index() {
		result.use(Results.json()).from("It works! You have installed VRaptor4js plugin correctly.").serialize();
	}
}