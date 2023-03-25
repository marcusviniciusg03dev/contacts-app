<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Lib\Services\RegisterPersonAndContactService;
use Illuminate\Http\Request;

class RegisterPersonAndContactController extends Controller
{
    public function handleReq(Request $request)
    {

        $person = $request->input('person');
        $contacts = $request->input('contacts');

        return RegisterPersonAndContactService::execute($person, $contacts);
    }
}
