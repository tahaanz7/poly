<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\BlogController;

/* Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum'); */

Route::delete('/blogs/{id}', [BlogController::class, 'destroy']);
Route::put('/blogs/{id}', [BlogController::class, 'update']);
Route::get('/blogs/{id}', [BlogController::class, 'show']);
Route::post('/blogs', [BlogController::class, 'store']);
Route::get('/blogs', [BlogController::class, 'index']);

/* Route::apiResource('blogs', BlogController::class); */
