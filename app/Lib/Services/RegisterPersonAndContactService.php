<?php

namespace App\Lib\Services;

use App\Models\Contact;
use App\Models\Person;
use Exception;

class RegisterPersonAndContactService
{

    public static function execute($person, $contacts)
    {
        $name = $person['name'];
        $cpf = $person['cpf'];
        $address = $person['address'];

        if (empty(trim($name)) || empty(trim($cpf)) || empty(trim($address))) {
            throw new Exception('some information is missing.');
        }

        if (strlen($cpf) !== 11) {
            throw new Exception('invalid cpf.');
        }

        if (!is_array($person)) {
            throw new Exception('invalid person type.');
        }

        if (!is_array($contacts)) {
            throw new Exception('invalid contact list type.');
        }

        $contactsLength = count($contacts);

        if ($contactsLength < 1 || $contactsLength > 5) {
            throw new Exception('contacts must be maximum of 5.');
        }

        foreach ($contacts as $contact) {
            $telephone = $contact['telephone'];
            $telephoneDescription = $contact['telephone_description'];

            if (!isset($telephone) || !isset($telephoneDescription)) {
                throw new Exception('telephone and telephone description must be set.');
            }

            if (strlen($contact['telephone']) !== 11) {
                throw new Exception('telephone is invalid.');
            }
        }

        $findedPerson = Person::where('cpf', $cpf)->first();

        if ($findedPerson) {
            throw new Exception('person already exists.');
        }

        $createdPerson = Person::create($person);

        foreach ($contacts as $contact) {
            Contact::create([
                'telephone' => $contact['telephone'],
                'telephone_description' => $contact['telephone_description'],
                'person_id' => $createdPerson->id,
            ]);
        }

        return ['person' => $person, 'contacts' => $contacts];
    }
};
