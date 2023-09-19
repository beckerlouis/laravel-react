<?php

namespace App\Http\Controllers\App\Account;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;

class ProfileUpdateAction extends Controller
{
    public function __invoke(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->update();

        return back();
    }
}
