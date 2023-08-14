<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebPageAction extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $seo = [
            'title' => 'Welcome - laravel-react',
            'description' => '',
            'keywords' => ['keywords1', 'keywords2', 'keywords3'],
        ];

        return Inertia::render('Welcome', [
            'seo' => $seo,
        ]);
    }
}
