using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class Zombie : MonoBehaviour
{
    // Start is called before the first frame update
    //Make whisperer go to healObj only if health < maxhealth
    public GameObject player;
    public PlayerStats playerScript;
    public WhispererScript whisperer;
    

    public int gunDetectionRange = 15;
    public int baseDetectionRange = 10;

    public int attackRange = 5;
    public int health = 1;
    public float rotationSpeed = 50.0f;
    

    public GameObject [] waypoints = new GameObject [4];
    int reachedWaypoint = 0;


    enum State {wander, goToPlayer, attack, destroy};
    State currentState;
    NavMeshAgent agent;

    void Awake()
    {
        Debug.Log("Start");
        Debug.Log(reachedWaypoint);
        currentState = State.wander;
    }
    void Start()
    {
        agent = GetComponent<NavMeshAgent>();
    }
    
    // Update is called once per frame
    void Update()
    {
        //PRIORITY
        if (health <= 0f)
        {
            currentState = State.destroy;
            Debug.Log(currentState);
        }
        else if (DistanceBetweenObj(player) < attackRange)
        {
            currentState = State.attack;
            Debug.Log(currentState);
        }
        else if (DistanceBetweenObj(player) < baseDetectionRange)
        {
            currentState = State.goToPlayer;
            Debug.Log(currentState);
        }
        /*  needs player variable for shots fired
        else if (DistanceBetweenObj(player) < gunDetectionRange && player.shotsFired)
        {
            IEnumerator Coroutine()
            {
                currentState = State.goToPlayer;
                yield return new WaitForSeconds(1);
            {
            
        }
        */
        else 
        {
            currentState = State.wander;
        }

        /*  For the Whisperer
        else if (DistanceBetweenObj(healObj) < 10 && health < maxHealth)        //Modified to only go for healthObjs if health if not full
        {
            currentState = State.objPickup;
            Debug.Log(currentState);
        }
        */

        /* Testing Code for Health System
        if (DistanceBetweenObj(waypoints[4]) < 5)
        {
            health = 1;
            Debug.Log("Health = 1");
        }

        if (DistanceBetweenObj(waypoints[5]) < 5)
        {
            health = 0;
            Debug.Log("Destroyed");
        }
        */


        //MAIN FSM
        switch(currentState)
        {
            case State.wander:
            GoToWaypoint(waypoints);
            break;

            /*  Used for whisperer
            case State.objPickup:
            GoToObj(healObj);
            break;
            */

            case State.goToPlayer:
            if(DistanceBetweenObj(player) <= 10)
            {
                GoToObj(player);
            }
            
            break;

            case State.attack:
            if(DistanceBetweenObj(player) <= 5)
            {
                GoToObj(player);
            }
            
            if(DistanceBetweenObj(player) <= 1)
            {
                playerScript.health--;
            }
            
            //Attack();     Function for attacking the player added here
            break;

            /*  Used for whisperer
            case State.flee:
            AwayFromObj(player);
            //Moves forward when fleeing (z direction)
            break;
            */

            case State.destroy:
            Destroy(this.gameObject);
            break;
        }
    }
    


    void GoToWaypoint (GameObject [] waypoints)
    {
        switch (reachedWaypoint)
        {
            case 0:
                agent.SetDestination(waypoints[reachedWaypoint].transform.position);
                if(DistanceBetweenObj(waypoints[reachedWaypoint]) <= 3)
                {
                    reachedWaypoint++;
                    Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
            break;
            
            case 1:
                agent.SetDestination(waypoints[reachedWaypoint].transform.position);
                if(DistanceBetweenObj(waypoints[reachedWaypoint]) <= 3)
                {
                    reachedWaypoint++;
                    Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
            break;

            case 2:
                agent.SetDestination(waypoints[reachedWaypoint].transform.position);
                if(DistanceBetweenObj(waypoints[reachedWaypoint]) <= 3)
                {
                    reachedWaypoint++;
                    Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
            break;

            case 3:
                agent.SetDestination(waypoints[reachedWaypoint].transform.position);
                if(DistanceBetweenObj(waypoints[reachedWaypoint]) <= 3)
                {
                    reachedWaypoint = 0;
                    Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
            break;
            
        }
    }

    void GoToObj (GameObject targetObj)
    {
        Vector3 toObj = targetObj.transform.position - this.transform.position;
        this.transform.LookAt(toObj);
        agent.SetDestination(targetObj.transform.position);
    }

    void AwayFromObj (GameObject targetObj)
    {
        Vector3 toObj = targetObj.transform.position - this.transform.position;
        Vector3 awayObj = toObj.normalized * -10f;
        this.transform.LookAt(awayObj);
        agent.SetDestination(awayObj);
    }

    float DistanceBetweenObj (GameObject targetObj)
    {
        return Vector3.Distance(targetObj.transform.position, this.transform.position);
    }

    bool Randomness (int chances)
    {
        return (Random.Range(0,101) < chances);
    }
}
