using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerStats : MonoBehaviour
{
    public static PlayerStats playerStats;

    //This class is for tracking player related stats 
    [Header("Health Settings")]
    public int health = 5;
    public int maxHealth = 5;

    [Header("Ammo Settings")]
    public int ammo = 0;
    public int maxAmmo  = 15;
}

