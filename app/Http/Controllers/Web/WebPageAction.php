<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebPageAction extends Controller
{
    public function __invoke(Request $request): \Inertia\Response
    {
        return Inertia::render('Welcome/Welcome', [
            'seo' => __('web/seo.welcome'),
        ]);
    }
}
