<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Lib\Services\RegisterPersonAndContactService;
use Illuminate\Http\Request;

class RegisterPersonAndContactController extends Controller
{
    public function handleReq(Request $request)
    {
        $person = [
            'name' => $request->input('name'),
            'cpf' => $request->input('cpf'),
            'address' => $request->input('address'),
        ];
        $contacts = $request->input('contacts');

        return RegisterPersonAndContactService::execute($person, $contacts);
    }
}
