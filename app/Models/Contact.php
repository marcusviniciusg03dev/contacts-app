<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'telephone',
        'telephone_description',
        'person_id',
    ];

    protected $cast = [
        'created_at',
        'updated_at',
    ];

    public function people() {
        return $this->belongsTo(Person::class);
    }
}
