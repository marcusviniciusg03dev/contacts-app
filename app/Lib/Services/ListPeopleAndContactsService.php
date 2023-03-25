<?php

namespace App\Lib\Services;

use App\Models\Contact;
use App\Models\Person;

class ListPeopleAndContactsService {

    public static function execute()
    {
        return Person::with('contacts')->get();
    }

}
