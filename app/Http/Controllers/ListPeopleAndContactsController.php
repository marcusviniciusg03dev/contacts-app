<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Lib\Services\ListPeopleAndContactsService;
use Illuminate\Http\Request;

class ListPeopleAndContactsController extends Controller
{
    public function handleReq(Request $request)
    {
        return ListPeopleAndContactsService::execute();
    }
}
