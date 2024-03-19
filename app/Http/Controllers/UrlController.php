<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class UrlController extends BaseController
{
	public function create(Request $request)
	{
		echo '<pre>'; print_r($request->all()); echo '</pre>';die;
	}
}
