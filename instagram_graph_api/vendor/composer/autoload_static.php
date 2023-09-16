<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4af97cf654e0812ed3989215e982db98
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Facebook\\' => 9,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Facebook\\' => 
        array (
            0 => __DIR__ . '/..' . '/facebook/graph-sdk/src/Facebook',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4af97cf654e0812ed3989215e982db98::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4af97cf654e0812ed3989215e982db98::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit4af97cf654e0812ed3989215e982db98::$classMap;

        }, null, ClassLoader::class);
    }
}