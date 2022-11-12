using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ExitCollide : MonoBehaviour
{
    [Header("Exit Settings")]
    //The player 
    public GameObject playerObj;

    //object with timer and points script
    public GameObject timerObject;

    public int finalScore = 0;

    //For the Win Pause Screen to appear
    public bool won = false;

    //Trigger is called on collision 
    private void OnTriggerEnter(Collider other)
    {

        //If player collides with this pickup
        if (other.gameObject == playerObj)
        {
            //add health 
            Debug.Log("Player Reached Objective");

            //grab the current stats of the player
            PlayerStats stat = other.gameObject.GetComponent<PlayerStats>();
            //grab timer
            ManagerTimerPoints timer = timerObject.gameObject.GetComponent<ManagerTimerPoints>();

            //Calculate points
            finalScore = Mathf.RoundToInt(timer.timeLeft) + timer.pointsToAdd;

            //Log Score
            Debug.Log("Final Score: " + finalScore + " Time Left: " + Mathf.RoundToInt(timer.timeLeft) + "s");


            //In the future, here we will display the results on the hud 

            won = true;
        }

    }


}
