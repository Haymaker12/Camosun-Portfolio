using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;


//LAST EDITED DEC12 2040


public class WhispererScript : MonoBehaviour
{
    // Start is called before the first frame update
    [Header("Object References")]
    public GameObject player;
    public GameObject ZombieManager;
    public GameObject[] healObj = new GameObject[4];
    public GameObject gc;
    public GameObject cam;
    public GameObject whisperer;

    [Header("Whisperer Stats")]
    public int health = 2;
    public float rotationSpeed = 200.0f;

    [HideInInspector]
    public int maxHealth = 2;
    private bool isAttacking;

    [Header("Detection Range")]
    public int gunDetectionRange = 15;
    public int generalDetectionRange = 10;
    public int attackRange = 5;
    public int fleeRange = 15;
    public GameObject[] waypoints = new GameObject[4];
    int reachedWaypoint = 0;

    public GameObject timerObj;

    enum State { wander, goToPlayer, attack, flee, getHeal };
    State currentState;
    UnityEngine.AI.NavMeshAgent agent;

    void Awake()
    {
        currentState = State.wander;
    }
    void Start()
    {
        //Debug.Log(currentState);
        agent = GetComponent<UnityEngine.AI.NavMeshAgent>();
    }

    // Update is called once per frame
    void Update()
    {
        if (health == 0)
        {
            Destroy(whisperer);
        }





        if ((health == 1 && DistanceBetweenObj(player) <= fleeRange) || cam.GetComponent<PlayerHandler>().gun)     //ADDED DETECTION FOR WHETHER PLAYER HAS A GUN EQUIPPED
        {
            currentState = State.flee;
            //Debug.Log(currentState);
        }
        else if (health == 1 && CheckHealObj(healObj))
        {
            currentState = State.getHeal;
        }
        else if (DistanceBetweenObj(player) < attackRange && health > 1)
        {
            currentState = State.attack;
            //Debug.Log(currentState);
        }
        else if (DistanceBetweenObj(player) < generalDetectionRange && health > 1)
        {
            currentState = State.goToPlayer;
            //Debug.Log(currentState);
        }
        else if (DistanceBetweenObj(player) < gunDetectionRange && health > 1 && gc.GetComponent<GunController>().shotsFired)
        {
            currentState = State.goToPlayer;
        }
        else if (health == maxHealth)
        {
            currentState = State.wander;
        }




        //MAIN FSM
        switch (currentState)
        {
            case State.wander:
                if (CheckHealObj(healObj) && health == 1)
                {
                    currentState = State.getHeal;
                }
                else
                {
                    GoToWaypoint(waypoints);
                }

                //Debug.Log(currentState);
                break;

            case State.goToPlayer:
                GoToObj(player);
                //Debug.Log(currentState);
                break;

            case State.attack:
                if (!isAttacking)
                {
                    StartCoroutine(AttackPlayer());
                }
                //Debug.Log(currentState);
                break;

            case State.flee:
                AwayFromObj(player);
                //Debug.Log(currentState);
                break;

            case State.getHeal:
                if (CheckHealObj(healObj))
                {
                    GoToObj(GoToHealObj(healObj));
                    //Debug.Log(currentState);
                }
                break;

        }
    }

    bool CheckHealObj(GameObject[] healObj)
    {
        foreach (GameObject obj in healObj)
        {
            if (obj != null)
            {
                if (DistanceBetweenObj(obj) <= 20)
                {
                    return true;
                }
            }

        }
        return false;
    }

    GameObject GoToHealObj(GameObject[] healObj)
    {
        foreach (GameObject obj in healObj)
        {
            if (obj != null)
            {
                if (DistanceBetweenObj(obj) <= 20)
                {
                    return obj;
                }
            }

        }
        return null;
    }
    void GoToObj(GameObject targetObj)
    {
        agent.SetDestination(targetObj.transform.position);
    }

    void AwayFromObj(GameObject targetObj)
    {

        Vector3 toObj = targetObj.transform.position - this.transform.position;
        Vector3 awayObj = toObj.normalized * -30f;
        this.transform.LookAt(awayObj);
        if (DistanceBetweenObj(player) <= 20)
        {
            this.transform.Translate(awayObj * Time.deltaTime, Space.World);
        }
        else
        {

            currentState = State.wander;
        }
    }

    float DistanceBetweenObj(GameObject targetObj)
    {
        return Vector3.Distance(targetObj.transform.position, this.transform.position);
    }

    void GoToWaypoint(GameObject[] waypoints)
    {
        //Debug.Log("GotoWPT");
        switch (reachedWaypoint)
        {
            case 0:
                agent.SetDestination(waypoints[reachedWaypoint].transform.position);
                if (DistanceBetweenObj(waypoints[reachedWaypoint]) <= 5)
                {
                    reachedWaypoint++;
                    //Debug.Log("Whisperer health: " + this.health);
                    //Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
                break;

            case 1:
                agent.SetDestination(waypoints[reachedWaypoint].transform.position);
                if (DistanceBetweenObj(waypoints[reachedWaypoint]) <= 5)
                {
                    reachedWaypoint++;
                    //Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
                break;

            case 2:
                agent.SetDestination(waypoints[reachedWaypoint].transform.position);
                if (DistanceBetweenObj(waypoints[reachedWaypoint]) <= 5)
                {
                    reachedWaypoint++;
                    //Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
                break;

            case 3:
                agent.SetDestination(waypoints[reachedWaypoint].transform.position);
                if (DistanceBetweenObj(waypoints[reachedWaypoint]) <= 5)
                {
                    reachedWaypoint = 0;
                    //Debug.Log("waypoint " + reachedWaypoint + " reached!");
                }
                break;
        }
    }


    IEnumerator AttackPlayer()
    {
        GoToObj(player);

        if (DistanceBetweenObj(player) <= 3)
        {
            int playerHealth = player.GetComponent<PlayerStats>().health;
            isAttacking = true;
            yield return new WaitForSeconds(2.0f);
            isAttacking = false;
           
            if (Random.Range(0, 100) < 50)
            {
                DecreaseScore();
                switch (playerHealth)
                {
                    case 5:
                        player.GetComponent<PlayerStats>().health = 4;
                        break;

                    case 4:
                        player.GetComponent<PlayerStats>().health = 3;
                        break;

                    case 3:
                        player.GetComponent<PlayerStats>().health = 2;
                        break;

                    case 2:
                        player.GetComponent<PlayerStats>().health = 1;
                        break;

                    case 1:
                        player.GetComponent<PlayerStats>().health = 0;
                        break;
                }

            }
        }
    }

    void AttackZombie()
    {
        ZombieManager.GetComponent<FlockManager>().CheckBoids();
    }


    private void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.tag == "Bullet")
        {
            Debug.Log("shot!");
            switch (health)
            {
                case 2:
                    health = 1;
                    break;

                case 1:
                    health = 0;
                    break;
            }
            Debug.Log(health);
        }

        if (other.gameObject.tag == "Knife")
        {
            if (Random.Range(0, 100) > 50)
            {
                Debug.Log("MISS");
            }
            else
            {
                Debug.Log("Knifed!");
                switch (health)
                {
                    case 2:
                        health = 1;
                        break;

                    case 1:
                        health = 0;
                        break;
                }
                Debug.Log(health);
            }
        }
    }

    void DecreaseScore()
    {
        timerObj.gameObject.GetComponent<ManagerTimerPoints>().pointsToAdd -= 2;
    }

}
