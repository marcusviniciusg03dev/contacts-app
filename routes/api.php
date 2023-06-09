<?php

use App\Http\Controllers\ListPeopleAndContactsController;
use App\Http\Controllers\RegisterPersonAndContactController;
use Illuminate\Support\Facades\Route;

Route::post('/person', [RegisterPersonAndContactController::class, 'handleReq']);

Route::get('/people-contacts', [ListPeopleAndContactsController::class, 'handleReq']);
